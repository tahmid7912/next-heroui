// import { CircleDollar } from '@heroui/react-icons'
import { Card ,Link } from '@heroui/react'


export default function Taskcard({ task }) {


    const {title, description} = task;

  return (
    <Card variant='bordered' className="border-2 border-primary rounded-lg">
      {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  )
}
