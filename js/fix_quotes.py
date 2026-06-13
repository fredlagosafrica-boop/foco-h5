#!/usr/bin/env python3
# -*- coding: utf-8 -*-
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()
# Replace Chinese curly quotes with escaped ASCII quotes
content = content.replace('\u201c', '\\"')  # left "
content = content.replace('\u201d', '\\"')  # right "
with open('data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed Chinese quotes')