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
    ==
  ::
  ++  proof
    %-  ot
    :~  ['kb_username' so]
        ['token' so]
    ==
  ::
  ++  config
    %-  ot
    :~  :-  'badges'
        =;  badge
          (ar (ot badge))
        :~  ['name' so]
            ['data' so]
         ::
           :: :-  'data'
           :: =;  base64-check
           ::   (cu base64-check so)
           :: |=(a=@t ?>(?=(^ (de:base64 a)) a))
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
++  json-to-keybase-response
  |=  jon=json
  ^-  keybase-response
  =,  dejs:format
  |^  (parse-json jon)
  ::
  ++  parse-json
    %-  of
    :~  [%status status]
    ==
  ::
  ++  status
    %-  ou
    :~  ['code' (un ni)]
        ['name' (un so)]
        ['desc' (uf ~ (mu so))]
    ==
  --
--
