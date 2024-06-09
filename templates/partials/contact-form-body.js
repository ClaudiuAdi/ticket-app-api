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
            bgcolor="#ffffff"
          >
            <tbody style="padding: 36px 50px">

              <tr>
                <td style="padding: 10px 50px">
                  <h1
                    style="
                      color: #312e89;
                      text-align: center;
                      font-size: 24px;
                    "
                  >
                    Cerere suport
                  </h1>
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 50px">
                  <p style="font-size: 18px; color: #312e89">
                    <span style="font-weight: 600">Nume:</span>
                    {{name}}
                  </p>
                </td>
              </tr>

              <tr>
               <td style="padding: 10px 50px">
                 <p style="font-size: 18px; color: #312e89">
                   <span style="font-weight: 600">Adresa de email:</span>
                   {{email}}
                 </p>
               </td>
              </tr>

            <tr>
               <td style="padding: 10px 50px">
                 <p style="font-size: 18px; color: #312e89">
                   <span style="font-weight: 600">Mesaj:</span>
                   {{message}}
                 </p>
               </td>
            </tr>

            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://raw.githubusercontent.com/spuneiartur/images/main/astro.png"
                    alt="Server of Universe logo"
                    width="220px"
                    height="auto"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>`;
