import React from 'react'
import Drawer from './SideBarChild'
import DrawerItem from './DrawerI'

export default class Side extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Drawer>
                    <DrawerItem label="Inbox" icon="https://github.com/richachauhan59/Create_React_App/blob/master/public/inbox.png?raw=true"/>
                    <DrawerItem label="Starred" icon="/icon/star.png"/>
                    <DrawerItem label="Send email" icon="/icon/send-email.png"/>
                    <DrawerItem label="Drafts" icon="/icon/draft.png"/>
                </Drawer>
            </div>
        )
    }
}