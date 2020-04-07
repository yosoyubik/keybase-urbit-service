# Urbit Identity Service for Keybase


Keybase is a service to aggregate multiple web2 identities and offers secure p2p messaging and file storage. Keybase assumes each ID service has multiple users. In the [Urbit](http://urbit.org) paradigm, each Uribt ID is a self-sovereign host (personal server). Each Urbit ID is one service and one user.

This repo contains a Gall app and UI that creates a Urbit ID based identity service and hosts an identity proof of the Urbit ID.

## Installation

In order to run your application on your ship, you will need Urbit v.0.10.0 or higher. On your Urbit ship, if you haven't already, mount your pier to Unix with `|mount %`.

## Using

### `npm run build`

This builds your application and copies it into your Urbit ship's desk. In your Urbit (v.0.8.0 or higher) `|commit %home` (or `%your-desk-name`) to synchronise your changes.

If this is the first time you're running your application on your Urbit ship, don't forget to `|start %keybase`.

### `npm run serve`

Builds the application and copies it into your Urbit ship's desk, watching for changes. In your Urbit (v.0.8.0 or higher) `|commit %home` (or `%your-desk-name`) to synchronise your changes.

The app is available at: `your-domain/~keybase`
