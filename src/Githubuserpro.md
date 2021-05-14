### Funtionality 
#### Component Tree
        <APP>
            <Inputbox /> 
            <HistoryList>
                <ListItem />
            <HistoryList>    
            <GithubUser>
        </APP>
#### Function


### Key points when using React 
#### Data
    - Basically, the data can be simplified to 1.one single user ID(or username); 2. the user ID array to store all the ID you have fetched.
    - The data FLOW to different components. If the data is used by more than one component, you hoist the data to parent component(here is APP.)
#### View
    There are 3 view: the input box view; the fetch history list view; and the info detail view. 
#### State Tree