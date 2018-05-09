import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '@/assets/logo.png';

class PageNavBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Link className={'logo'} to="/"><img src={logoImg} alt=""/></Link>
                <ul>
                    <li className="active">
                        <Link to="/Home">
                            <mark>萤火虫</mark>
                            <span>FIREFLY</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Activity">
                            <mark>精彩活动</mark>
                            <span>Activities</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Photo">
                            <mark>照片下载</mark>
                            <span>Photo download</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Prop">
                            <mark>道具选择</mark>
                            <span>Photo download</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/About">
                            <mark>关于我们</mark>
                            <span>Photo download</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

const StyledPageNavBar = styled(PageNavBar)`
    padding: 16px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        width: 163px;
        height: 62px;
        display: block;
    }
    ul {
        display: flex;
        li {
            margin-left: 50px;
            a {
                color: #333;
                display: block;
                position: relative;
                padding-bottom: 8px;
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 5px;   
                    background:#e7af00;       
                    transition: width .3s;           
                }                       
                mark {
                    font-size: 26px;
                    line-height: 54px;                    
                }
                span {
                    font-size: 12px;
                    vertical-align: sub;
                }
                &:hover::after {
                    width: 100%;
                }         
            }
        }
    }
`;

export default StyledPageNavBar;
