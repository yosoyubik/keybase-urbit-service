::  Types
::
|%
+$  keybase-proof  [user=@t token=@t]
::
+$  keybase-config
  $:  version=@t                :: 1
      domain=@t                 :: 'beeactivists.com'
      display-name=@t           :: 'display_name': 'Urbit'
      ::  A regex for validating usernames on Bee Activists in the re2 format
      ::  https://github.com/google/re2/wiki/Syntax (inline flags, like for case-insensitivity, are not supported).
      ::  Keybase will treat these case-insensitively and will only display usernames
      ::  in lowercase.
      ::  "username": {
      ::  "re": "^[a-zA-Z0-9_]{2,20}$",
      ::  "min": 2,
      ::  "max": 20
      :: },
      user-name=[re=@t min=@ud max=@ud]  ::  ~norsyr-torryn
      brand-color=@t                     ::  #FFB800
    ::
      ::  Your brand logo will appear in various places around the Keybase app.
      ::  Assets will be rehosted by Keybase, so do let us know about updates.
      ::  For all SVGs, expand all texts and strokes to shapes.
      ::
      $=  logo             ::  32px black&white sigil and 16px black&white sigil
      $:  ::  A full-black monochrome SVG for light mode.
          ::  Should look good at 16px square.
          ::
          svg-black=@t
          ::  A full-white monochrome SVG for dark mode.
          ::  Should look good at 16px square.
          ::
          svg-white=@t
          ::  A full color SVG for light mode.
          ::  Should look good at 32px square.
          ::
          svg-full=@t
          ::  A full color SVG for dark mode.
          ::  Should look good at 32px square. (Can be the same as svg_full)
          ::
          svg-full-darkmode=@t
      ==
    ::
      description=@t        ::  'A clean-slate OS and network for the 21st century'

      ::  See the Protocol section for an explanation of these urls. All URLs must be
      ::  on the given `domain` or a subdomain and accessible via HTTPS.
      ::  "prefill_url": "https://beeactivists.com/new-profile-proof?kb_username=%{kb_username}&username=%{username}&token=%{sig_hash}&kb_ua=%{kb_ua}",
      prefill-url=@t
      ::  Link to a profile page, for when users click from inside Keybase
      ::  "profile_url": "https://beeactivists.com/profile/%{username}",
      profile-url=@t
      ::  Endpoint for checking a user's proofs
      ::  "check_url": "https://api.beeactivists.com/keybase-proofs.json?username=%{username}",
      check-url=@t
      ::  Paths are explained below
      ::  "check_path": ["signatures"], # Path to signature list
      check-path=(list @t)
      ::  "avatar_path": ["avatar"], # Optional path to avatar url
      avatar-path=(unit (list @t))
      ::  A contact for Keybase in case of issues.
      ::  "contact": ["admin@beeactivists.com", "sassybedazzle@keybase"]
      contact=(list @t)
  ==
::
+$  keybase-response
  $%  [%status code=@ud name=@t desc=(unit @t)]
      [%valid ?]
  ==
::
+$  keybase-action
  $%  [%add proof=keybase-proof]
      [%save badges=(list [@t @t]) =keybase-config]
      [%test @t]
  ==
::
+$  keybase-update
  $%  keybase-action
  ==
--
