module.exports = `
    <tr>
        <td align="center" style="padding: 32px 0">
          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: collapse"
            color="#312E89"
          >
            <tbody style="padding: 36px 50px;">
              <tr>
                <td style="padding: 10px 50px">
                  <h1
                    style="
                      color: #374151;
                      text-align: center;
                      font-size: 24px;
                    "
                  >
                   Dragă {{name}},
                  </h1>
                </td>
              </tr>

              <div>
                <table
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0">
                  <tr>
                    <td style="padding: 10px 50px">
                      <p style="font-size: 18px; color: #4F45E4; font-weight: 600">
                         {{response}}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </tbody>
          </table>
        </td>
      </tr>`;
