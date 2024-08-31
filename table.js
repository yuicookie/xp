window.onload = xpTable;
function xpTable() {
  const rows = 100;
  const cols = 2;
  const titles = ["レベル", "必要経験値"]; // タイトルを設定
  let Level = 0;

  const table = document.createElement('table');
  table.border = "1"; // テーブルに枠線を追加

  for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr'); // 行を作成

      for (let j = 0; j < cols; j++) {
          const cell = document.createElement(i === 0 ? 'th' : 'td'); // 先頭行は<th>、他は<td>

          if (i === 0) {
              cell.textContent = titles[j]; // 先頭行にはタイトルを設定
              cell.style.backgroundColor = 'lightgray';
              cell.style.fontWeight = 'bold';
          } else if (j === 0) {
            cell.textContent = +Level + 1;
            Level++;
          } else if (j === 1) {
            NextNextXP = "Lv"+Level;
            cell.textContent = Number(XP[NextNextXP]).toLocaleString();
          }
          row.appendChild(cell); // 行にセルを追加
      }
      table.appendChild(row); // テーブルに行を追加
  }

  const container = document.getElementById('table-container');
  container.innerHTML = ''; // 以前の内容をクリア
  container.appendChild(table); // 新しいテーブルを追加
}
