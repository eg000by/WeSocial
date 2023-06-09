import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profileContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}
