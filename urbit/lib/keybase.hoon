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
--
