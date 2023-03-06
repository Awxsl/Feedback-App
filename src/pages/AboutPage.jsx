import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quia hic voluptas itaque suscipit impedit velit debitis. Ratione, ipsum voluptas.</p>
            <p>Version 1.0.0</p>
            <p><Link to="/">Home</Link></p>
        </div>
    </Card>
  )
}

export default AboutPage