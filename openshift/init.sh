#!/usr/bin/env bash
inject_env_vars() {
    envsubst '\$TEST_ENV \$OTHER_ENV \$BACKEND_URL' < "$1" > "$1".tmp && mv "$1".tmp "$1"
}

inject_env_vars /opt/app-root/src/index.html
