/-  *keybase
/+  base64
|%
++  json-to-keybase-action
  |=  jon=json
  ^-  keybase-action
  =,  dejs:format
  |^  (parse-json jon)
  ::
  ++  parse-json
    %-  of
    :~  [%add proof]
        [%save config]
        [%test so]
        [%remove so]
    ==
  ::
  ++  proof
    %-  ot
    :~  ['kb_username' so]
        ['sig_hash' so]
    ==
  ::
  ++  config
    %-  ot
    :~  :-  'badges'
        =;  badge
          (ar (ot badge))
        :~  ['name' so]
            ['data' so]
        ==
      ::
        :-  'config'
        %-  ou
        :~  ['version' (un so)]
            ['domain' (un so)]
            ['display_name' (un so)]
          ::
            :-  'username'
            =;  user-name
              (un (ot user-name))
            :~  ['re' so]
                ['min' ni]
                ['max' ni]
            ==
          ::
            ['brand_color' (un so)]
          ::
            :-  'logo'
            =;  logo
              (un (ot logo))
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
    ==  ==
  --
::
++  json-to-keybase-response
  |=  jon=json
  ^-  keybase-response
  =,  dejs:format
  |^  (parse-json jon)
  ::
  ++  parse-json
    =;  response-types
      (cu parse-key response-types)
    %-  of
    :~  ['status' status]
        ['proof_valid' bo]
    ==
  ::
  ++  status
    %-  ou
    :~  ['code' (un ni)]
        ['name' (un so)]
        ['desc' (uf ~ (mu so))]
    ==
  ::
  ++  parse-key
    |*  [key=@t val=*]
    ^-  keybase-response
    ?:  ?=(? val)
      [%valid val]
    ?.  ?=(^ val)  !!
    [%status val]
  --
::
++  keybase-config-to-json
  |=  config=keybase-config
  ^-  json
  =,  enjs:format
  %-  pairs
  :~  ['version' s+version.config]
      ['domain' s+domain.config]
      ['display_name' s+display-name.config]
    ::
      :-  'username'
      =*  name  user-name.config
      %-  pairs
      :~  ['re' s+re.name]
          ['min' (numb min.name)]
          ['max' (numb max.name)]
      ==
    ::
      ['brand_color' s+brand-color.config]
    ::
      :-  'logo'
      =*  logo  logo.config
      %-  pairs
      :~  ['svg_black' s+svg-black.logo]
          ['svg_white' s+svg-white.logo]
          ['svg_full' s+svg-full.logo]
          ['svg_full_darkmode' s+svg-full-darkmode.logo]
      ==
    ::
      ['description' s+description.config]
      ['prefill_url' s+prefill-url.config]
      ['profile_url' s+profile-url.config]
      ['check_url' s+check-url.config]
      ['check_path' a+(turn check-path.config |=(a=@t s+a))]
    ::
      :-  'avatar_path'
      ?~  avatar-path.config  [%a [s+'']~]
      a+(turn u.avatar-path.config |=(a=@t s+a))
    ::
      ['contact' a+(turn contact.config |=(a=@t s+a))]
  ==
::
++  keybase-proofs-to-json
  |=  proofs=(map @t keybase-proof)
  ^-  json
  %-  pairs:enjs:format
  :_  ~
  :-  'signatures'
  a+(turn ~(val by proofs) keybase-proof-to-json)
::
++  keybase-proof-to-json
  |=  proof=keybase-proof
  ^-  json
  %-  pairs:enjs:format
  :~  ['kb_username' s+user.proof]
      ['sig_hash' s+token.proof]
  ==
--
