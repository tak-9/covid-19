import React, {createContext, Component} from 'react';

export const TrackerContext = createContext();

class TrackerContextProvider extends Component {
    state = {
        triggerUpdate: Math.random()
    }

    setTriggerUpdate = () => {
        console.log("*****setTriggerUpdate****" , this.state.triggerUpdate);
        this.setState({
            triggerUpdate: Math.random()
        });
    }

    render() { 
        return (
            <TrackerContext.Provider value={{...this.state, setTriggerUpdate: this.setTriggerUpdate}}>
                {this.props.children}
            </TrackerContext.Provider>
          );
    }
}
 
export default TrackerContextProvider;

