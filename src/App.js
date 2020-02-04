import React from 'react'
import { Table , Button } from 'antd'
import { CSVLink } from 'react-csv'
import 'antd/dist/antd.css'

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {

      _langRenderColHeader : 'EN'

    }

  }


  render() {

    const dataSrc = [
      {
        number : 1,
        status : 'Active',
        name : 'R1M',
        province : 'BKK'
      },
      {
        number : 2,
        status : 'Active',
        name : 'S1000RR',
        province : 'BKK'
      },
      {
        number : 3,
        status : 'Active',
        name : 'DucatiV4R',
        province : 'BKK'
      },
      {
        number : 4,
        status : 'Active',
        name : 'GSXR1000R',
        province : 'BKK'
      }
    ]

    const csvHeader = [

      { label: (this.state._langRenderColHeader === 'TH' ? 'ลำดับ' : 'Number'), key: "number" },
      { label: (this.state._langRenderColHeader === 'TH' ? 'สถานะ' : 'Status'), key: "status" },
      { label: (this.state._langRenderColHeader === 'TH' ? 'ชื่อ' : 'Name'), key: "name" },
      { label: (this.state._langRenderColHeader === 'TH' ? 'จังหวัด' : 'Province'), key: "province" }

    ]

    const colTopic = [
      {
        title : (this.state._langRenderColHeader === 'TH' ? 'ลำดับ' : 'Number'),
        dataIndex : 'number'
      },
      {
        title : (this.state._langRenderColHeader === 'TH' ? 'สถานะ' : 'Status'),
        dataIndex : 'status'
      },
      {
        title : (this.state._langRenderColHeader === 'TH' ? 'ชื่อ' : 'Name'),
        dataIndex : 'name'
      },
      {
        title : (this.state._langRenderColHeader === 'TH' ? 'จังหวัด' : 'Province'),
        dataIndex : 'province'
      }
    ]

    return (

      <div style={{ margin : 0 , padding : 20 , width : `100vw`, height : `100vh` }}>

        <Button shape={'round'} style={{ width : `200px` , height : `40px` , marginTop : `30px` }}  type={'primary'}
          onClick={() => {
            console.log('TH')
            this.setState({ _langRenderColHeader : 'TH' })
            console.log('Lang > ' , this.state._langRenderColHeader)
          }}
        >TH</Button>
        <Button shape={'round'} style={{ width : `200px` , height : `40px` , marginLeft : `20px` }}  type={'primary'}
          onClick={() => {
            console.log('EN')
            this.setState({ _langRenderColHeader : 'EN' })
            console.log('Lang > ' , this.state._langRenderColHeader)
          }}
        >EN</Button>
        <CSVLink data={dataSrc} headers={csvHeader}>
          Download
        </CSVLink>
        <p>Set Lang : {this.state._langRenderColHeader}</p>
        <Table columns={colTopic} style={{ width : `1000px` , height : `400px` }} dataSource={dataSrc} />
      </div>

    )

  }

}

export default App