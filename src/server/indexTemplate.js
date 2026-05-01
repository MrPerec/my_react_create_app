export const indexTemplate = (content, token, redirectUri) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Reddit</title>
  <script src="/static/client.js" type="application/javascript"></script>
</head>

<body>
  <div id="root" data-token="${token ?? ''}" data-redirect="${redirectUri ?? ''}">${content}</div>
  <div id="modal_root"></div>
</body>

</html>
`;
