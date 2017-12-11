import Drawer from 'react-native-drawer'

class Application extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render () {
    return (
      <Drawer
        type="displace"
        content={<SideMenu toggleDrawer={this.toggleDrawer.bind(this)}
        ref={(ref) => this._drawer = ref}
        stores={this.state.store} navigator={this._navigator} theme={this.state.theme}/>}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer
        >
        <MainView />
      </Drawer>
    )
  }
})
