####Project Plan
1. constrcut the API structure with off-line movie list data; two component: search and movie list
2. set up Movie Detai page with useEffect and search. data:id.
4. fetch serch results dynamically


#####update: 5/18
1. the movie detail page only share single movie ID with APP, so I put it seperately. when you fetch and update movie data, the data only can be seen with this component.
2.  const [mldata, setMList] = useState(null); // movielist data
    const [ID, setID] =useState('tt0381681'); // single movie id
    const [SearchText, setSearchText] = useState('sunset'); // search text

    those are the three state I put at APP level. 
    SearchText is send up by SearchIputBox, and will be used to make a new fetch, which will update the movielist data.
    the movielist data will be used to generate a new movie list.
    when you click items on the movie list, the onClick will send that movie's ID to app, which will be passed to movie detail component to re-render that page.
3. to do:
    - add the onClick events
    - change app view layout.
    - router
    - infinit roll

#####updata:5/19
1.Connect SearchInputBox and MovieList. Add onSubmit event on SearchInputBox: you pass the setSearchText to that component, and capture text change;when submit, searchText is updated, and APP will fetch new mldata, which will cause re-render of movie list.
2.Connect MovieList and MovieDetail. as this part use ant design List, the way to add a onClick event is a little bit different. You need wrap onClick by <a(herf)>.