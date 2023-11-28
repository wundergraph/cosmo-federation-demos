#!/bin/sh

npx concurrently --kill-others \
    "cd demos/go/cmd/employees && go run main.go" \
    "cd demos/go/cmd/family && go run main.go" \
    "cd demos/go/cmd/hobbies && go run main.go" \
    "cd demos/go/cmd/products && go run main.go"
