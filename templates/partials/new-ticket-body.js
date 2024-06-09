const link = `${process.env.APP_BASE_URL}/admin/tickets`;

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
                   Dragă {{admin}},
                  </h1>
                </td>
              </tr>

                  <tr>
                    <td style="padding: 10px 50px">
                      <p style="font-size: 18px; color: #374151">
                        {{customer}} a creat un tichet nou, cu mesajul:
                      </p>
                    </td>
                  </tr>

                  <tr>
                  <td style="padding: 10px 50px">
                    <p style="font-size: 18px; color: #4F45E4; font-weight: 600">
                      {{message}}
                    </p>
                  </td>
                </tr>

                <tr>
                <td style="padding: 10px 50px">
                  <p style="font-size: 18px; color: #374151">
                    Apasă <a href=${link}/{{ticket}} style="font-size: 18px; color: #4F45E4; font-weight: 600">aici</a> pentru a răspunde.
                  </p>
                </td>
              </tr>

            </tbody>
          </table>
        </td>
      </tr>`;
