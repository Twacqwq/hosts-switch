# README

## About

This is a simple desktop application developed based on [wails](https://wails.io/), compatible with Linux, Windows and Mac, which can help you better maintain your local hosts configuration.

## Environmental Requirements
Based on go v1.17, wails v2.0.0-beta.43, nodejs v16

## Installing Wails
Run `go install github.com/wailsapp/wails/v2/cmd/wails@v2.0.0-beta.43` to install the Wails CLI.

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.
