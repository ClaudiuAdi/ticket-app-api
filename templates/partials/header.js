const href = process.env.APP_BASE_URL;
const starImage = `${href}/images/star.png`;
module.exports = `<tr>
<td bgcolor="#221C4C" align="center" style="padding: 32px 0">
  <a href="${href}" style="text-decoration: none; color: #fff">
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="border-collapse: collapse; padding: 10px 20px"
    >
      <tr>
        <td></td>
        <td align="center" width="14px">
          <img
            src="https://raw.githubusercontent.com/spuneiartur/images/main/favicon.ico"
            alt="star"
            style="margin-right: 10px"
            width="14px"
            height="14px"
          />
        </td>
        <td align="center" width="250px">
          <h1
            style="
              color: #fff;
              font-size: 18px;
              font-weight: bold;
              margin: 0;
            "
          >
            The server of the Universe
          </h1>
        </td>
        <td width="14px" align="center">
          <img
            src="https://raw.githubusercontent.com/spuneiartur/images/main/favicon.ico"
            alt="star"
            style="width: 14px; height: 14px"
          />
        </td>
        <td></td>
      </tr>
    </table>
  </a>
</td>`;
