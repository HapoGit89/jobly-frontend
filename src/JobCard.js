

import { Card,CardBody,CardTitle,CardSubtitle, CardText,Button } from "reactstrap";
import { JoblyApi } from "./api";

function JobCard ({job, applyJob, user}){

  const handleClick = ()=> applyJob(job.id)
  let applied = false
  user.applications.includes(job.id) ? applied = true : applied = false

  

  if (applied == false){
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
          <Button onClick={handleClick}>
            Apply
          </Button>
        </CardBody>
      </Card>)}
      else {
        return(<Card
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
            <Button disabled onClick={handleClick}>
              Apply
            </Button>
          </CardBody>
        </Card>)
      }

}


export default JobCard


