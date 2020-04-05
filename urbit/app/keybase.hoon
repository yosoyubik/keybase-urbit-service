::  keybase: A Keybase identity service for Urbit
::
::    data:            scry command:
::    ------------    ----------------------------------------------
::    proof           .^(keybase-proof %gx /=keybase=/proof/noun)
::    config          .^(keybase-config %gx /=keybase=/config/noun)
::
/-  *keybase
/+  *server, default-agent, verb, *keybase
::
/=  index
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/keybase/index
  /|  /html/
      /~  ~
  ==
/=  tile-js
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/keybase/js/tile
  /|  /js/
      /~  ~
  ==
/=  script
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/keybase/js/index
  /|  /js/
      /~  ~
  ==
/=  style
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/keybase/css/index
  /|  /css/
      /~  ~
  ==
/=  keybase-png
  /^  (map knot @)
  /:  /===/app/keybase/img  /_  /png/
/=  keybase-svg
  /^  (map knot @)
  /:  /===/app/keybase/svg  /_  /svg/
::  State
::
=>  |%
    +$  card  card:agent:gall
    ::
    +$  state
      $%  [%0 state-zero]
      ==
    ::
    +$  state-zero
      $:  proof=keybase-proof
          config=keybase-config
      ==
    --
::
=|  state-zero
=*  state  -
::  Main
::
%+  verb  |
^-  agent:gall
=<  |_  =bowl:gall
    +*  this       .
        keybase-core  +>
        kc         ~(. keybase-core bowl)
        def        ~(. (default-agent this %|) bowl)
    ::
    ++  on-init
      ^-  (quip card _this)
      ~&  "innit"
      :_  this(proof *keybase-proof, config *keybase-config)
      :~  ::  Connects to %launch app
          ::
          launch-poke
          ::  Connects %eyre to the frontend
          ::
          [%pass /bind/keybase %arvo %e %connect [~ /'~keybase'] %keybase]
      ==
    ::
    ++  on-poke
      |=  [=mark =vase]
      ^-  (quip card _this)
      ?>  (team:title our.bowl src.bowl)
      ?+    mark  (on-poke:def mark vase)
          %json
        ~&  "got poked"
        =^  cards  state
          (handle-json:kc !<(json vase))
        [cards this]
      ::
          %handle-http-request
        =+  !<([eyre-id=@ta =inbound-request:eyre] vase)
        :_  this
        %+  give-simple-payload:app  eyre-id
        (poke-handle-http-request:kc inbound-request)
      ::
          %keybase-action
        =^  cards  state
          (handle-keybase-action:kc !<(keybase-action vase))
        [cards this]
      ==
    ::
    ++  on-watch
      |=  =path
      ^-  (quip card:agent:gall _this)
      ?:  ?=([%http-response *] path)
        `this
      ~&  path
      ?.  =(/primary path)
        ~&  [src.bowl path]
        (on-watch:def path)
      [[%give %fact ~ %json !>(s+'ok')]~ this]
    ::
    ++  on-agent  on-agent:def
    ::
    ++  on-arvo
      |=  [=wire =sign-arvo]
      ^-  (quip card _this)
      ?:  ?=(%bound +<.sign-arvo)
        [~ this]
      ?.  ?=(%http-response +<.sign-arvo)
        (on-arvo:def wire sign-arvo)
      =^  cards  state
        (http-response:kc wire client-response.sign-arvo)
      [cards this]
    ::
    ++  on-save  on-save:def
    ++  on-load  on-load:def
    ++  on-leave  on-leave:def
    ::  +on-peek: read from app state
    ::
    ++  on-peek
      |=  =path
      ^-  (unit (unit cage))
      ?+  path  (on-peek:def path)
          [%x %proof ~]  ``noun+!>(proof)
          [%x %config ~]  ``noun+!>(config)
      ==
    ::
    ++  on-fail   on-fail:def
    --
::
|_  =bowl:gall
::
++  launch-poke
  ^-  card
  :*  %pass
      /launch/keybase
      %agent
      [our.bowl %launch]
      %poke
      [%launch-action !>([%keybase /keybasetile '/~keybase/js/tile.js'])]
  ==
::
++  save-svg-badge
  |=  [file=@t data=@t]
  ^-  card
  =/  =path
    [(scot %p our.bowl) %home (scot %da now.bowl) %app %keybase %svg file %svg ~]
  =/  contents=cage  [%svg !>(data)]
  [%pass / %arvo %c %info (foal:space:userlib path contents)]
::
++  handle-json
  |=  jon=json
  ^-  (quip card _state)
  ?>  (team:title our.bowl src.bowl)
  ~&  json+jon
  (handle-keybase-action (json-to-keybase-action jon))
::
++  handle-keybase-action
  |=  act=keybase-action
  ^-  (quip card _state)
  |^
  ?-  -.act
      %add     (handle-add keybase-proof.act)
      %save    (handle-save [keybase-config.act badges.act])
      %test    [[%pass / %arvo %d %flog [%text (trip +.act)]]~ state]
  ==
  ::
  ++  handle-add
    |=  p=keybase-proof
    ^-  (quip card _state)
    [~ state(proof p)]
  ::
  ++  handle-remove
    ^-  (quip card _state)
    [~ state(proof *keybase-proof)]
  ::
  ++  handle-save
    |=  [config=keybase-config badges=(list [@t @t])]
    ^-  (quip card _state)
    :_  state(config config)
    %+  weld
      (check-keybase:config-json config)
    (turn badges save-svg-badge)
  --
::
++  poke-handle-http-request
  |=  =inbound-request:eyre
  ^-  simple-payload:http
  =+  url=(parse-request-line url.request.inbound-request)
  |^
  ?:  ?=([%'~keybase' %api ^] site.url)
    (handle-api-call t.t.site.url)
  ?:  ?=([%'~keybase' %svg ^] site.url)
    (handle-svg-call i.t.t.site.url)
  %+  require-authorization:app  inbound-request
  handle-auth-call
  ::
  ++  handle-api-call
    |=  pax=path
    ^-  simple-payload:http
    =,  enjs:format
    |^
    ?+  pax  not-found:gen
        [%profile ^]  (profile t.pax)
        [%check ^]    (check t.pax)
        [%avatar ^]   (avatar t.pax)
    ==
    ::
    ++  profile
      |=  pax=(list @t)
      ^-  simple-payload:http
      (json-response:gen (json-to-octs s+'profile'))
    ::
    ++  check
      |=  pax=(list @t)
      ^-  simple-payload:http
      =;  =json
        (json-response:gen (json-to-octs json))
      %+  frond  'signatures'
      :-  %a
      :_  ~
      %-  pairs
      :~  ['kb_username' s+keybase-username.proof]
          ['sig_hash' s+token.proof]
      ==
    ::
    ++  avatar
      |=  pax=(list @t)
      ^-  simple-payload:http
      (json-response:gen (json-to-octs s+'avatar'))
    --
  ::
  ++  handle-svg-call
    |=  file=@t
    ^-  simple-payload:http
    ~&  file
    =/  svg  (~(get by keybase-svg) file)
    ?~  svg
      not-found:gen
    (svg-response:gen (as-octs:mimes:html u.svg))
  ::
  ++  handle-auth-call
    |=  =inbound-request:eyre
    ^-  simple-payload:http
    ?+  site.url  not-found:gen
        [%'~keybase' %css %index ~]  (css-response:gen style)
        [%'~keybase' %js %tile ~]    (js-response:gen tile-js)
        [%'~keybase' %js %index ~]   (js-response:gen script)
        [%'~keybase' %img @t *]      (handle-img-call i.t.t.site.url)
        [%'~keybase' *]              (html-response:gen index)
    ==
  ::
  ++  handle-img-call
    |=  name=@t
    =/  img  (~(get by keybase-png) name)
    ?~  img
      not-found:gen
    (png-response:gen (as-octs:mimes:html u.img))
  --
::
++  config-json
  |%
  ++  check-keybase
    |=  config=keybase-config
    ^-  (list card)
    =,  html
    =/  encoded-json=tape  (en-json (keybase-config-to-json config))
    =/  =request:http
      :*  %'POST'
          'https://keybase.io/_/api/1.0/validate_proof_config.json'
          ['Content-Type' 'application/x-www-form-urlencoded']~
        ::
          %-  some
          %-  as-octs:mimes
          %-  crip
          "config={(en-urlt:html encoded-json)}"
      ==
    =/  =path  /check-keybase/(scot %da now.bowl)
    [%pass path %arvo %i %request request *outbound-config:iris]~
  ::
  ++  save
    |=  =json
    ^-  card
    =/  =path
      /(scot %p our.bowl)/home/(scot %da now.bowl)/app/keybase/config/json
    =/  contents=cage  [%json !>(json)]
    [%pass / %arvo %c %info (foal:space:userlib path contents)]
  --
::
++  http-response
  |=  [=wire response=client-response:iris]
  ^-  (quip card _state)
  ::  ignore all but %finished
  ?.  ?=(%finished -.response)
    [~ state]
  ?:  (gth 200 status-code.response-header.response)
    [~ state]
  =/  data=(unit mime-data:iris)  full-file.response
  ?~  data
    :: data is null
    [~ state]
  =/  jon=(unit json)  (de-json:html q.data.u.data)
  ?~  jon
     [~ state]
  =/  res=keybase-response  (json-to-keybase-response u.jon)
  |^
  ?+   wire  ~&  "nothing..."  [~ state]
    [%check-keybase *]  (check-config res)
  ==
  ::
  ++  check-config
    |=  res=keybase-response
    ^-  (quip card _state)
    =/  message=json
      %-  pairs:enjs:format
      ?:  =(0 code.res)
        ~[['out' s+'ok'] ['error' b+%.n]]
      :~  ['error' b+%.y]
          :-  'out'
          ?~  desc.res
            s+'config error'
          s+u.desc.res
      ==
    :_  state
    [%give %fact ~[/primary] %json !>(message)]~
  --
--
