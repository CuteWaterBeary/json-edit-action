# json-edit-action

This is a VERY simple action, whose entire point is to make simple changes to json files.

The action is based on [this]( https://github.com/bitoiu/node-js-action-template) template, and the json editing is based on https://www.npmjs.com/package/edit-json-file. Any formatting for the environment variables is in the npm package.

## example usage
```yaml
      - name: manifest Version
        uses: deef0000dragon1/json-edit-action/@v1
        env:
          KEY: version
          VALUE: v0.1.1
          FILE: manifest.json
```

Usage for more than a few edits is not recomended. It may be more efficent to code a custom json file creator/editor script for your use-case.
