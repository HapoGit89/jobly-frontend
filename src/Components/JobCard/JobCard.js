

import { Card,CardBody,CardTitle,CardSubtitle, ListGroup, ListGroupItem, CardText,Button } from "reactstrap";
import { useContext } from "react";
import userContext from "../../userContext";
import "./JobCard.css"
import { NavLink } from "react-router-dom";

function JobCard ({job, applyJob}){
  // Using reactstrap Card component to render Job Info
  const user = useContext(userContext) 

  const handleClick = ()=> applyJob(job.id)
  // applied var used for conditional rendering, of applied = true the apply button is disabled
  let applied = false
  user.applications.includes(job.id) ? applied = true : applied = false

  

  if (applied == false){
    return (<Card
        style={{
          width: '120vh'
        }}
      >
        <CardBody>
          <CardTitle tag="h1">
            {job.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            
            {job.companyName && <NavLink to={`./${job.companyHandle}`}>`@${job.companyName}`</NavLink>}
          </CardSubtitle>
          <CardText tag="h3">
            <ListGroup >
              <div className="JobDetails">
              <ListGroupItem>
              Salary: 
              {`${ job.salary|| "N/A"}` || " N/A"}
              </ListGroupItem>
              <ListGroupItem>
              Equity:
            {`${ job.equity}` || " N/A"}
              </ListGroupItem>
              </div>
            </ListGroup> 
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
            <CardTitle tag="h1">
              {job.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
                     {job.companyName && <NavLink to={`../companies/${job.companyHandle}`}>{`@${job.companyName}`}</NavLink>}
            </CardSubtitle>
            <CardText tag="h3">
            <ListGroup className="JobDetails">
              <ListGroupItem>
              Salary:
              {job.salary}
              </ListGroupItem>
              <ListGroupItem>
              Equity:
            {job.equity}
              </ListGroupItem>
            </ListGroup>
          </CardText>
            <Button disabled onClick={handleClick}>
              Apply
            </Button>
          </CardBody>
        </Card>)
      }

}


export default JobCard


