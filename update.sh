#!/bin/bash

# relative paths to this script
noteDir="../misc"
htmlDir="html"
noteImageDir="../misc/images"
webImageDir="images/notes"
srcFile="5g.md"
destFile="5g.html"
templateFile="template.html"

# remove 5g.html
rm $htmlDir/$destFile
cp $htmlDir/$templateFile $htmlDir/$destFile

# update website images folder
rm -rf "$webImageDir"
mkdir "$webImageDir"
cp -r "$noteImageDir"/* "$webImageDir"

marked -i "$noteDir/$srcFile" > /tmp/5g_content.html
sed '/<!-- replace -->/{
r /tmp/5g_content.html
d
}' "$htmlDir/$destFile" > "$htmlDir/${destFile}.tmp"

# sed -i '' "s|images/|../images/notes/|g" "$htmlDir/${destFile}.tmp"
mv "$htmlDir/${destFile}.tmp" "$htmlDir/$destFile"

rm /tmp/5g_content.html