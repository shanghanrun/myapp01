import create from 'zustand'

const useStore = create((set)=>({
  count: 0,
  증가(){
    set((state)=>({count: state.count +1}))
  }
}))

function App() {
  const {count, 증가} = useStore()

  return (
    <div className="App">
      <p>구독자: {count}</p>
      <button onClick={증가}>증가</button>
      <Card />
    </div>
  );
}

function Card() {
  const {count} = useStore()
  return (
    <div>
      <p>카드: {count}</p>
    </div>
  )
}

export default App;
