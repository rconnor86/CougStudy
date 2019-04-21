import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
  Button,
  ButtonGroup,
  Listview,
  NavMenu,
  NavMenuItem,
  ListviewItem as Item,
  RouterView,
  AekReactRouter,
  Input,
  Label,
  Corner,
  Tag,
  Page,
  Panel
} from "@ombiel/aek-lib";

const router = new AekReactRouter({useHash:false});

  export default class Screen extends React.Component {

  render() {

    return (
        <VBox>
          <Page>
          <RouterView router={router}>
          <page path ="/">
          <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0} >Cougs Study</BannerHeader>
          <BasicSegment>
          <NavMenu style={{backgroundColor:"#981E32"}}>
          <NavMenuItem icon="home" href="#/page/screen1">Log In</NavMenuItem>
          </NavMenu>
          <div style={{marginBottom:"1em"}}>
          <Input name="name" size="huge" fluid>
          <input/>
          <Tag style={{backgroundColor:"#981E32"}}>Username</Tag>
          </Input>
          </div>
          <div style={{marginBottom:"1em"}}>
          <Input name="name" size="huge" fluid>
          <input/>
          <Tag style={{backgroundColor:"#981E32"}}>Password</Tag>
          </Input>
          </div>
          </BasicSegment>
          </page>
          <Screen1 path="/page/screen1"/>
          <Screen2 path="/page/screen2"/>
          <Screen3 path="/page/screen3"/>
          <Screen4 path="/page/screen4"/>
          <CS121 path="/page/cs121"/>
          <CS223 path="/page/cs223"/>
          <CS355 path="/page/cs355"/>
          <SG1 path="/page/sg1"/>
          <SG2 path="/page/sg2"/>
          <SG3 path="/page/sg3"/>
          <SG4 path="/page/sg4"/>
          <SG5 path= "/page/sg5"/>
          <SG6 path= "/page/sg6"/>
          <SG7 path= "/page/sg7"/>
          <SG8 path= "/page/sg8"/>
          <SG9 path= "/page/sg9"/>
          <Submit path="/page/submit"/>
          </RouterView>
          </Page>
        </VBox>
    );

  }
}

export class Screen4 extends React.Component {
  render() {

    return (
        <VBox>
          <Page>
          <page path = '#/page/screen4'>
          <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
          <BasicSegment>
          <NavMenu style={{backgroundColor:"#981E32"}}>
          <NavMenuItem icon="home" href="#/page/screen1">Home</NavMenuItem>
          <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
          <NavMenuItem icon="rocket" active >Study Groups</NavMenuItem>
          <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg1">
              <h1>Homework - CPTS 121</h1>
              <p>Wednesday 6:00-7:00</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg2">
              <h1>Study for Test - CPTS 223</h1>
              <p>Thursday 4:00-6:00</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg3">
              <h1>Group Work - CPTS 355</h1>
              <p>Saturday 2:00-5:00</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg4">
              <h1>Homework Help - CPTS 122</h1>
              <p>Wednesday 12-3</p>
              </NavMenuItem>
            </NavMenu>
            <NavMenu>
              <NavMenuItem icon="idea" href="#/page/submit">
                Create
              </NavMenuItem>
              <NavMenuItem icon="reply">
                Join
              </NavMenuItem>
            </NavMenu>
            </BasicSegment>
            </page>
            </Page>
          </VBox>
      );

    }
  }

export class Screen1 extends React.Component {
  render() {

    return (
        <VBox>
          <Page>
          <page path = '#/page/screen1'>
          <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
          <BasicSegment>
          <NavMenu style={{backgroundColor:"#981E32"}}>
          <NavMenuItem icon="home" active>Announcements</NavMenuItem>
          <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
          <NavMenuItem icon="rocket" href="#/page/screen3">Study Groups</NavMenuItem>
          <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
          <h2>Announcements</h2>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg5">
              <h1>CPTS 121</h1>
              <p>Changing meeting location to room 105...</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg6">
              <h1>CPTS 223</h1>
              <p>Cancelling this week's meeting...</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg7">
              <h1>CPTS 223</h1>
              <p>New member Nathan Doe has joined group...</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg8">
              <h1>CPTS 355</h1>
              <p>Due date changed...</p>
            </NavMenuItem>
            </NavMenu>
          </BasicSegment>
          </page>
          </Page>
        </VBox>
    );

  }
}

export class SG5 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path= '#/page/sg5'>
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
                </NavMenu>
              <NavMenu>
                <NavMenuItem href="#/page/sg5">
                <h2>CPTS 121</h2>
                <p>Changing meeting location to Todd 105 instead of our normal room. Meeting time will be the same as always.</p>
                </NavMenuItem>
              </NavMenu>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class SG6 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path= '#/page/sg6'>
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
                </NavMenu>
              <NavMenu>
                <NavMenuItem href="#/page/sg6">
                <h2>CPTS 223</h2>
                <p>Cancelling this week's meeting for Spring Break. See you guys next Thursday!</p>
                </NavMenuItem>
              </NavMenu>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class SG7 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path= '#/page/sg7'>
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
                </NavMenu>
              <NavMenu>
                <NavMenuItem href="#/page/sg7">
                <h2>CPTS 223</h2>
                <p>New member Nathan Doe has joined group. He will be joining us this Thursday!</p>
                </NavMenuItem>
              </NavMenu>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class SG8 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path= '#/page/sg8'>
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
                </NavMenu>
              <NavMenu>
                <NavMenuItem href="#/page/sg8">
                <h2>CPTS 355</h2>
                <p>Due date changed for PA2, it is now due on 5/17/2019.</p>
                </NavMenuItem>
              </NavMenu>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}




export class Screen2 extends React.Component {
  render() {

    return (
        <VBox>
          <Page>
          <page path = '#/page/screen2'>
          <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
          <BasicSegment>
          <NavMenu style={{backgroundColor:"#981E32"}}>
          <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
          <NavMenuItem icon="calendar" active>Classes</NavMenuItem>
          <NavMenuItem icon="rocket" href="#/page/screen3">Study Groups</NavMenuItem>
          <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/cs121">
              <h1>CPTS 121</h1>
              <p>8:10am-9:00am</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/cs223">
              <h1>CPTS 223</h1>
              <p>10:10am-11:00am</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/cs355">
              <h1>CPTS 355</h1>
              <p>1:10pm-2:00pm</p>
            </NavMenuItem>
          </NavMenu>
          </BasicSegment>
          </page>
          </Page>
        </VBox>
    );

  }
}

export class Screen3 extends React.Component {
  render() {

    return (
        <VBox>
          <Page>
          <page path = '#/page/screen3'>
          <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
          <BasicSegment>
          <NavMenu style={{backgroundColor:"#981E32"}}>
          <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
          <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
          <NavMenuItem icon="rocket" active >Study Groups</NavMenuItem>
          <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg1">
              <h1>Homework - CPTS 121</h1>
              <p>Wednesday 6:00pm-7:00pm</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg2">
              <h1>Study for Test - CPTS 223</h1>
              <p>Thursday 4:00pm-6:00pm</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg3">
              <h1>Group Work - CPTS 355</h1>
              <p>Saturday 2:00pm-5:00pm</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem icon="idea" href="#/page/submit">
              Create
            </NavMenuItem>
            <NavMenuItem icon="reply" href="#/page/sg9">
              Join

            </NavMenuItem>
          </NavMenu>
          </BasicSegment>
          </page>
          </Page>
        </VBox>
    );

  }
}

export class SG9 extends React.Component {
  render() {

    return (
        <VBox>
          <Page>
          <page path = '#/page/sg9'>
          <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
          <BasicSegment>
          <NavMenu style={{backgroundColor:"#981E32"}}>
          <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
          <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
          <NavMenuItem icon="rocket" active >Study Groups</NavMenuItem>
          <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg9">
            <h1>Group Work - CPTS 355</h1>
            <p>Saturday 6:00pm-9:00pm</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg9">
            <h1>Homework Help - CPTS 223</h1>
            <p>Tuesday 1:00pm-3:00pm</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg9">
            <h1>PA Work Group - CPTS 121</h1>
            <p>Monday 6:00am-9:00am</p>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem href="#/page/sg9">
            <h1>Midterm Review - CPTS 355</h1>
            <p>Thursday 7:00am-12:00pm</p>
            </NavMenuItem>
          </NavMenu>
          </BasicSegment>
          </page>
          </Page>
        </VBox>
    );

  }
}

export class CS121 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path="#/page/cs121">
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
              </NavMenu>
              <h2>Cpts 121</h2>
              <p>Location: EME 225 </p>
              <p>Professor: Andy O'fallon</p>
              <p>Time: MWF 8:10AM-9:00AM</p>
              <p>Description: This class is geared to show students the basics or C, memory allocation and management, and good style while coding. Students will use
              Visual Studio in this class and must have a working laptop to complete Homework assignments and lab assignments.</p>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem href="#/page/sg1">
                  <h3>Study Group Homework (Creator: Sarah Doe)</h3>
                </NavMenuItem>
              </NavMenu>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class CS223 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path="#/page/cs223">
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
              </NavMenu>
              <h2>Cpts223</h2>
              <p>Location: Dana 203 </p>
              <p>Professor: Hassan</p>
              <p>Time: MWF 10:10AM-11:00AM</p>
              <p>Description: This class is geared to show students the basics or C/C++ and to teach them a wide variety of data structures, how to implement them, and their run time efficiency. Students will upload PAs directly to the EECS GitLab for review by the instructor and the TAs</p>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem href="#/page/sg2">
                  <h3>Study Group Study for Test (Creator: John Doe)</h3>
                </NavMenuItem>
              </NavMenu>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class CS355 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path="#/page/cs355">
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
              </NavMenu>
              <h2>Cpts 355</h2>
              <p>Location: Sloan 175 </p>
              <p>Professor: Shakire</p>
              <p>Time: MWF 8:10AM-9:00AM</p>
              <p>Description: This class will give students a brief overview of several different programming languages in order to help make them more well-rounded programmers.</p>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem href="#/page/sg3">
                  <h3>Study Group Group Work (Creator: Emily Faey)</h3>
                </NavMenuItem>
              </NavMenu>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class SG1 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path="#/page/sg1">
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
              </NavMenu>
                <h2>Homework: Cpts 121</h2>
                <h3>Details:</h3>
                <p>Location: Terrel Library Newspaper Room </p>
                <p>Creator: Sarah Doe</p>
                <p>Time: Mondays 5:00PM</p>
                <p>Description: Meets weekly to do Homework assignments together.</p>
                <NavMenuItem icon="remove">
                  Leave Group
                </NavMenuItem>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class SG2 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path="#/page/sg2">
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
              </NavMenu>
                <h2>Study for Test: Cpts223</h2>
                <h3>Details:</h3>
                <p>Location: Owen Library 2nd Floor </p>
                <p>Creator: John Doe</p>
                <p>Time: Wednesdays 7:00AM</p>
                <p>Description: Meeting to cram for the upcoming midterm.</p>
                <NavMenuItem icon="remove">
                  Leave Group
                </NavMenuItem>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class SG3 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path="#/page/sg3">
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
              </NavMenu>
                <h2>Group Work: Cpts 355</h2>
                <h3>Details:</h3>
                <p>Location: CUB </p>
                <p>Creator: Emily Feay</p>
                <p>Time: Saturday 9:00PM</p>
                <p>Description: Meeting weekly to work on our group assignment.</p>
                <NavMenuItem icon="remove">
                  Leave Group
                </NavMenuItem>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class SG4 extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path="#/page/sg4">
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
              </NavMenu>
                <h2>Homework Help: Cpts 122</h2>
                <h3>Details:</h3>
                <p>Location: The Fiz </p>
                <p>Creator: Connor Rosentrator</p>
                <p>Time: Wednesday 12:00pm-3:00pm</p>
                <p>Description: Help with Homework</p>
                <NavMenuItem icon="trash" href="#/page/screen3">
                  Delete
                </NavMenuItem>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}

export class Submit extends React.Component {
  render() {

    return (
      <VBox>
        <Page>
          <page path="#/page/submit">
            <BannerHeader style={{backgroundColor:"#981E32"}} key="header" data-flex={0}>Cougs Study</BannerHeader>
            <BasicSegment>
              <NavMenu style={{backgroundColor:"#981E32"}}>
                <NavMenuItem icon="home" href="#/page/screen1">Announcements</NavMenuItem>
                <NavMenuItem icon="calendar" href="#/page/screen2">Classes</NavMenuItem>
                <NavMenuItem icon="rocket" href="#/page/screen3" >Study Groups</NavMenuItem>
                <NavMenuItem icon="setting" href="#/">Log Off</NavMenuItem>
              </NavMenu>
                <form>
                <div>
                <label>

                  Group Name
                  <div>
                  <Input placeholder="Homework Help">

                </Input>
                </div>
                </label>
                </div>

                <div>
                <label>

                  Class:
                  <div>
                  <Input placeholder="Cpts 122">
                </Input>
                </div>
                </label>
                </div>


              <div>
                <label>

                  Location
                  <div>
                  <Input placeholder="The Fiz">
                </Input>
                </div>
                </label>
                </div>

                <div>
                <label>

                  Time
                  <div>
                  <Input placeholder="Wednesday 12:00pm-3:00pm">
                </Input>
                </div>
                </label>
                </div>

                <div>
                <label>

                  Creator
                  <div>
                  <Input placeholder="Connor Rosentrator">
                </Input>
                </div>
                </label>
                </div>



              <div>
                <label>
                Description:
                <div>
                <textarea id = "Description" placeholder="Help with Homework"/>
                </div>

              </label>
              </div>
              <NavMenuItem href="#/page/screen4">
                Submit
              </NavMenuItem>



            </form>
            </BasicSegment>
          </page>
        </Page>
      </VBox>
      );
  }
}
