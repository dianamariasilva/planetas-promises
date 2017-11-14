function getPlanets(list){
    list.map(p=> fetch (p).then(r=>StorageEvent.setState({
        planets
    })));
}
  