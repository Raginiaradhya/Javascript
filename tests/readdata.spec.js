import {test} from '@playwright/test'
import excel from 'exceljs'
import { readdatafromexcel , writedata ,readmultipledatafromexcel,readmulrowandcelldata} from './utility/readdtaexcel'
test.skip('readdata',async()=>
{
    // const book=new excel.Workbook()
    // await book.xlsx.readFile('./testdata/testdata.xlsx')
    // const sheet=await book.getWorksheet('Sheet1')
    // const data=sheet.getRow(1).getCell(1).value
    // console.log(data);
    // const data1=sheet.getRow(2).getCell(2).value
    // console.log(data1);
    let data=await readdatafromexcel('Sheet1','./testdata/testdata.xlsx',1,1)
    console.log(data);
    
    
})
test.skip('writedata',async()=>
{
    await writedata('Sheet2','./testdata/testdata.xlsx')
    
    

    

    
})
test.skip('read multipledata',async()=>
{
    let data1=await readmultipledatafromexcel('Sheet1','./testdata/testdata.xlsx')
    console.log(data1);
    
})
test.only('read multiple data',async()=>
{
    let data2=await readmulrowandcelldata('Sheet1','./testdata/testdata.xlsx')
    console.log(data2);
    
})
