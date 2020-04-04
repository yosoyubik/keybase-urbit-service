::  keybase: A Keybase identity service for Urbit
::
::    data:            scry command:
::
::    proof           .^(* %gx /=keybase==/proof/noun)
::
/-  *keybase
/+  *server, default-agent, verb
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
      :_  this(proof *keybase-proof)
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
      ?.  =(/ path)
        (on-watch:def path)
      [[%give %fact ~ %json !>(s+'ok')]~ this]
    ::
    ++  on-agent  on-agent:def
    ::
    ++  on-arvo
      |=  [=wire =sign-arvo]
      ^-  (quip card _this)
      ?.  ?=(%bound +<.sign-arvo)
        (on-arvo:def wire sign-arvo)
      ~&  [wire sign-arvo]
      [~ this]
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
      [%launch-action !>([%keybase /keybase/tile '/~keybase/js/tile.js'])]
  ==
::
++  handle-json
  |=  jon=json
  ^-  (quip card _state)
  |^
  ?>  (team:title our.bowl src.bowl)
  (handle-keybase-action (json-to-keybase-action jon))
  ::
  ++  json-to-keybase-action
    |=  jon=json
    ^-  keybase-action
    =,  dejs:format
    |^  (parse-json jon)
    ::
    ++  parse-json
      %-  of
      :~  [%add proof]
          [%register config]
          :: [%remove so]
      ==
    ::
    ++  proof
      %-  ot
      :~  ['kb_username' so]
          ['token' so]
      ==
    ::
    ++  config
      %-  ou
      :~  ['version' (un so)]
          ['domain' (un so)]
          ['display_name' (un so)]
        ::
          :-  'username'
          %-  un
          %-  ot
          :~  ['re' so]
              ['min' ni]
              ['max' ni]
          ==
        ::
          ['brand_color' (un so)]
        ::
          :-  'logo'
          %-  un
          %-  ot
          :~  ['svg_black' so]
              ['svg_white' so]
              ['svg_full' so]
              ['svg_full_darkmode' so]
          ==
        ::
          ['description' (un so)]
          ['prefill_url' (un so)]
          ['profile_url' (un so)]
          ['check_url' (un so)]
          ['check_path' (un (ar so))]
          ['avatar_path' (uf ~ (mu (ar so)))]
          ['contact' (un (ar so))]
      ==
    --
  --
::
++  handle-keybase-action
  |=  act=keybase-action
  ^-  (quip card _state)
  |^
  ?-  -.act
      %add       (handle-add keybase-proof.act)
      %remove    handle-remove
      %register  (handle-register keybase-config.act)
  ==
  ::
  ++  handle-add
    |=  p=keybase-proof
    ^-  (quip card _state)
    ?>  (team:title our.bowl src.bowl)
    [~ state(proof p)]
  ::
  ++  handle-remove
    ^-  (quip card _state)
    ?>  (team:title our.bowl src.bowl)
    [~ state(proof *keybase-proof)]
  ::
  ++  handle-register
    |=  c=keybase-config
    ^-  (quip card _state)
    ?>  (team:title our.bowl src.bowl)
    [~ state(config c)]
  --
::
++  poke-handle-http-request
  |=  =inbound-request:eyre
  ^-  simple-payload:http
  =+  url=(parse-request-line url.request.inbound-request)
  |^
  ?:  ?=([%'~keybase' %api ^] site.url)
    (handle-api-call t.t.site.url)
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
  ++  handle-auth-call
    |=  =inbound-request:eyre
    ^-  simple-payload:http
    ?+  site.url  not-found:gen
        [%'~keybase' %css %index ~]  (css-response:gen style)
        [%'~keybase' %js %tile ~]    (js-response:gen tile-js)
        [%'~keybase' %js %index ~]   (js-response:gen script)
    ::
        [%'~keybase' %img @t *]
      =/  name=@t  i.t.t.site.url
      =/  img  (~(get by keybase-png) name)
      ?~  img
        not-found:gen
      (png-response:gen (as-octs:mimes:html u.img))
    ::
        [%'~keybase' *]  (html-response:gen index)
    ==
  --
--
