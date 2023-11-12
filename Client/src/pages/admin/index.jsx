import Image from 'next/image';
import { useRouter } from 'next/router';
import userImg from '../../../public/user.jpg'
function Sidebar() {
    const router = useRouter()

    const menuStyle = {
        background: '#ffea92',
        height: '100vh',
        width: '240px',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '5',
        outline: 'none',
    };

    const avatarStyle = {
        background: 'rgba(0,0,0,0.1)',
        padding: '2em 0.5em',
        textAlign: 'center',
    };

    const imgStyle = {
        width: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid #ffea92',
        boxShadow: '0 0 0 4px rgba(255,255,255,0.2)',
    };

    const h2Style = {
        fontWeight: 'normal',
        marginBottom: '0',
        paddingTop: '10px'
    };

    const ulStyle = {
        listStyle: 'none',
        padding: '0.5em 0',
        margin: '0',
    };

    const liStyle = {
        padding: '0.5em 1em 0.5em 3em',
        fontSize: '20px',
        fontWeight: 'normal',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left 15px center',
        backgroundSize: 'auto 20px',
        transition: 'all 0.15s linear',
        cursor: 'pointer',
    };

    const iconDashboardStyle = {
        backgroundImage: `url('http://www.entypo.com/images/gauge.svg')`,
    };

    const iconCustomersStyle = {
        backgroundImage: `url('http://www.entypo.com/images/briefcase.svg')`,
    };

    const iconUsersStyle = {
        backgroundImage: `url('http://www.entypo.com/images/users.svg')`,
    };

    const iconSettingsStyle = {
        backgroundImage: `url('http://www.entypo.com/images/tools.svg')`,
    };

    const mainStyle = {
        position: 'relative',
        height: '100vh',
    };

    const helperStyle = {
        background: 'rgba(0,0,0,0.2)',
        color: '#ffea92',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%,-50%,0)',
        padding: '1.2em 2em',
        textAlign: 'center',
        borderRadius: '20px',
        fontSize: '2em',
        fontWeight: 'bold',
    };

    const spanStyle = {
        color: 'rgba(0,0,0,0.2)',
        fontSize: '20px',
        display: 'block',
    };

    return (
        <>
            <nav style={menuStyle} tabIndex="0" >
                <div class="smartphone-menu-trigger" ></div>
                <header style={avatarStyle} >
                    <Image src={userImg} style={imgStyle} height={150} width={210} />
                    <h2 style={h2Style}>ADMIN</h2>
                </header>
                <ul style={ulStyle}>
                    <li tabIndex="0" class="icon-dashboard" style={{ ...liStyle, ...iconDashboardStyle }}><span style={spanStyle}>Dashboard</span></li>
                    <li tabIndex="0" class="icon-customers" style={{ ...liStyle, ...iconCustomersStyle }} onClick={() => router.push('/admin/product/create')}><span style={spanStyle}>Add Product</span></li>
                </ul>
            </nav >

        </>
    )
}

export default Sidebar;

