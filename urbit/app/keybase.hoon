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
        =+  url=(parse-request-line url.request.inbound-request)
        :_  this
        %+  give-simple-payload:app  eyre-id
        (poke-handle-http-request:kc inbound-request site.url)
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
      %add     (handle-add proof.act)
      %save    (handle-save [keybase-config.act badges.act])
      %test    [[%pass / %arvo %d %flog [%text (trip +.act)]]~ state]
  ==
  ::
  ++  handle-add
    |=  p=keybase-proof
    ^-  (quip card _state)
    :_  state(proof p)
    (validate:proof-keybase p)
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
      (check:config-keybase config)
    (turn badges save-svg-badge)
  --
::
++  poke-handle-http-request
  |=  [=inbound-request:eyre url=(list @t)]
  ^-  simple-payload:http
  |^
  ?:  ?=([%'~keybase' %api ^] url)
    (handle-api-call t.t.url)
  ?:  ?=([%'~keybase' %svg ^] url)
    (handle-svg-call i.t.t.url)
  %+  require-authorization:app  inbound-request
  handle-auth-call
  ::
  ++  handle-api-call
    |=  pax=path
    ^-  simple-payload:http
    =,  enjs:format
    |^
    ?+  pax  not-found:gen
        [%profile ^]  (handle-profile t.pax)
        [%check ^]    (handle-check t.pax)
        [%avatar ^]   (handle-avatar t.pax)
        [%proof ^]    (handle-proof t.pax)
    ==
    ::
    ++  handle-proof
      |=  pax=(list @t)
      :: kb_username=%{kb_username}&
      :: username=%{username}&
      :: token=%{sig_hash}&
      :: kb_ua=%{kb_ua}
      ^-  simple-payload:http
      ?>  ?=([user=@t patp=@t token=@t ua=@t ~] pax)
      =?  proof  =(i.t.pax (scot %p our.bowl))
        [i.t.pax i.t.t.pax]
      *simple-payload:http
    ::
    ++  handle-profile
      |=  pax=(list @t)
      ^-  simple-payload:http
      (json-response:gen (json-to-octs s+'profile'))
    ::
    ++  handle-check
      |=  pax=(list @t)
      ^-  simple-payload:http
      =;  =json
        (json-response:gen (json-to-octs json))
      %+  frond  'signatures'
      :-  %a
      :_  ~
      %-  pairs
      :~  ['kb_username' s+user.proof]
          ['sig_hash' s+token.proof]
      ==
    ::
    ++  handle-avatar
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
    =/  url=request-line
      (parse-request-line url.request.inbound-request)
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
    ^-  simple-payload:http
    =/  img  (~(get by keybase-png) name)
    ?~  img
      not-found:gen
    (png-response:gen (as-octs:mimes:html u.img))
  --
::
++  config-keybase
  |%
  ++  check
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
    =/  =path  /check-config/(scot %da now.bowl)
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
++  proof-keybase
  |%
  ++  validate
    |=  proof=keybase-proof
    ^-  (list card)
    =,  html
    :: =/  encoded-json=tape  (en-json (keybase-proof-to-json config))
    =/  =request:http
      :*  %'POST'
          'https://keybase.io/_/api/1.0/sig/proof_valid.json'
          ['Content-Type' 'application/x-www-form-urlencoded']~
        ::
          %-  some
          %-  as-octs:mimes
          %-  crip
          ;:  weld
              "domain={(trip domain.config)}&"
              "kb_username={(trip user.proof)}&"
              "username={(trip (scot %p our.bowl))}&"
              "sig_hash={(trip token.proof)}"
          ==
      ==
    =/  =path  /check-proof/(scot %da now.bowl)
    [%pass path %arvo %i %request request *outbound-config:iris]~
  ::
  ++  check  [~ state]
  ::
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
  =/  res=keybase-response
    (json-to-keybase-response u.jon)
  |^
  ?+   wire  ~&  "nothing..."  [~ state]
    [%check-config *]  (check-config res)
    [%check-proof *]   (check-proof res)
  ==
  ::
  ++  check-config
    |=  res=keybase-response
    ^-  (quip card _state)
    ?>  ?=(%status -.res)
    =/  jon=json
      ?.  =(0 code.res)  *json
      (keybase-config-to-json config)
    =/  message=json
      %-  pairs:enjs:format
      :-  ['config' jon]
      ?:  =(0 code.res)
        ~[['out' s+'ok'] ['error' b+%.n]]
      :~  ['error' b+%.y]
          :-  'out'
          ?~  desc.res
            s+'config error'
          s+u.desc.res
      ==
    :_  state
    :~  (save:config-keybase jon)
        [%give %fact ~[/primary] %json !>(message)]
    ==
  ::
  ++  check-proof
    |=  res=keybase-response
    ^-  (quip card _state)
    ?>  ?=(%valid -.res)
    :_  state
    :_  ~
    :*  %give  %fact  ~[/primary]  %json
        !>  %-  pairs:enjs:format
          ?:  +.res
            ~[['out' s+'ok'] ['error' b+%.n]]
          ~[['out' s+'proof is invalid'] ['error' b+%.y]]
    ==
  --
--
