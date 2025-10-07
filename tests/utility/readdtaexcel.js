import excel from 'exceljs'
export async function readdatafromexcel(sheetname, path, rownum, cellnum)
{
    const book=new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet=await book.getWorksheet(sheetname)
    const data=sheet.getRow(rownum).getCell(cellnum).value
    return data
}
export async function writedata(sheetname,path)
{
    const book = new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet=await book.addWorksheet(sheetname)
    sheet.getRow(3).getCell(4).value='javascript'
    await book.xlsx.writeFile(path)
}
export async function readmultipledatafromexcel(sheetname, path)
{
    const book=new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet=await book.getWorksheet(sheetname)
    let data=[]
    for( let row=1;row<=sheet.rowCount;row++)
    {
    const data1=sheet.getRow(row).getCell(1).value
    data.push(data1)
    
    }
    

    return data
}
export async function readmulrowandcelldata(sheetname,path)
{
    const book=new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet=await book.getWorksheet(sheetname)
    const data=[]
     for( let row=1;row<=sheet.rowCount;row++)
     {
        const rowdata=[]
        
            for(let col=1;col<=sheet.columnCount;col++)
            {
                let cellval=sheet.getRow(row).getCell(col).value
                rowdata.push(cellval)
            }
            data.push(rowdata)
        
     }
     return data
}