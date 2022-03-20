$request.url = $request.url.replace(/\?keyword=*/g, '')
$done({$request})
