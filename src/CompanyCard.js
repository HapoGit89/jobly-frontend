

import { Card,CardBody,CardTitle,CardSubtitle, CardText,Button } from "reactstrap";


function CompanyCard ({company}){
    return (<Card
        style={{
          width: '120vh'
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            <a href={`companies/${company.handle}`}>{company.name}</a>
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            @ {company.description}
          </CardSubtitle>
      
        </CardBody>
      </Card>)

}


export default CompanyCard


