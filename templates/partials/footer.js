const platformLink = require('./platform-link');

module.exports = `
<footer style="background-color: #2D2854">
<div
  style="
    padding: 35px 8%;
    text-align:center;
  "
>
  <span style="color: #fff; width: 100%; white-space: nowrap; font-size:12px;">
    Copyright &copy; {{year}} ${platformLink}. All rights reserved
  </span>
</div>
</footer>
</div>
</body>
</html>
`;
