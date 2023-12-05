

import { Card,CardBody,CardTitle,CardSubtitle, CardText,Button } from "reactstrap";
import { NavLink } from "react-router-dom";


function CompanyCard ({company}){
  // user reactstrap Card component to render company data
  
    return (<Card
        style={{
          width: '120vh'
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            <NavLink to={`./${company.handle}`}>{company.name}</NavLink>
            {/* <a href={`companies/${company.handle}`}>{company.name}</a> */}
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


