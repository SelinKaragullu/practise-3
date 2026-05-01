
import { useContext } from "react"
import { FeatureFlagsContext } from "./context"

export default function FeatureFlags () {

const {loading, enabledFlags} = useContext(FeatureFlagsContext)

const componentsToRender = [
  { key: "showLightAndDarkMode", component: <div >Light/Dark Mode Componenti</div> },
  { key: "showTicTacToeBoard", component: <div>Tic Tac Toe Componenti</div> }
]


return <>{loading? <div>Loading...</div> : null}
    {componentsToRender.map((component)=> <div key={component.key}>{
    enabledFlags[component.key]? 
        component.component : 
        null}
</div>
    )}
</>
}


function toggleTodo(id, completed) {
  
  // 1. GÜVENLİ GÜNCELLEME:
  // setTodos içine doğrudan dizi vermek yerine bir fonksiyon (arrow function) veriyoruz.
  // Bu sayede React bize o anki en güncel ve hatasız listeyi (currentTodos) veriyor.
  setTodos(currentTodos => {
    
    // 2. YENİ DİZİ YARATMA (IMMUTABILITY):
    // .map() metodu orijinal diziyi asla bozmaz, elemanları tek tek dönüp yepyeni bir dizi yaratır.
    return currentTodos.map(todo => {
      
      // 3. ARADIĞIMIZ ELEMANI BULMAK:
      // Döngüdeki elemanın ID'si, bizim değiştirmek istediğimiz ID ile aynı mı?
      if (todo.id === id) {
        
        // 4. SİHİRLİ DOKUNUŞ (SPREAD OPERATÖRÜ):
        // Eşleşme varsa: "...todo" diyerek o görevin içindeki her şeyi (başlık vb.) kopyala.
        // Hemen yanına yazdığımız "completed" ile de sadece o özelliği dışarıdan gelen yeni değerle ez (güncelle).
        return { ...todo, completed }
      }
      
      // 5. DİĞERLERİNE DOKUNMAMAK:
      // Eğer bu eleman bizim aradığımız eleman değilse, hiçbir değişiklik yapmadan aynen yeni listeye aktar.
      return todo
      
    })
  })
}



function toggleTodo (id, completed) {
  setTodos(currentTodos=>
    currentTodos.map(todo=> {
      if(todo.id===id){return {...todo,completed}}
      return todo
    }
    )
  )}


function deleteTodo (id) {
  setTodos(currentTodos=>currentTodos.filter((todo)=>todo.id!==id))
}

