

import { Card,CardBody,CardTitle,CardSubtitle, CardText,Button } from "reactstrap";


function JobCard ({job}){
    return (<Card
        style={{
          width: '120vh'
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            {job.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            @ {job.companyName}
          </CardSubtitle>
          <CardText tag="h1">
            <ul>
            <li> Salary:
            {job.salary}</li>
            <li>Equity: {job.equity}
            </li>
            </ul>
           
          </CardText>
          <Button>
            Apply
          </Button>
        </CardBody>
      </Card>)

}


export default JobCard


