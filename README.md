OC-Modal-React

Cette Modale est un composant React simple et réutilisable pour afficher une modale avec un message personnalisé. Ce composant peut être utilisé dans n'importe quel projet React pour afficher des notifications ou des messages d'alerte.

# Install your package

Now that you have your package published, you can install it in any other project.
To do so, you need to run the following command:

from NPM :

- ```sh
  npm i oc-modal-react
  ```

````
## Import your package

Now that you have your package installed, you can import it in any other project.
To do so, you need to run the following command:

- ```js
 import Modal from "oc-modal-react/dist/index";
````

````
### Example
- ```js
import React, { useState } from 'react';
import Modal from 'oc-modal-react/dist/index';

function App() {
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
setIsModalOpen(true);
};

const closeModal = () => {
setIsModalOpen(false);
};

return (

<div className="App">
<button onClick={openModal}>Open Modal</button>
{isModalOpen && (
<Modal message="This is a custom message!" closeModal={closeModal} />
)}
</div>
);
}

export default App;
````

#### Props

The Modal component accepts the following props:

- message (string, required): The message to be displayed inside the modal.
- closeModal (function, required): The function to call when the close button is clicked.

##### Example Usage of Props

- message: You can pass any string value to be displayed inside the modal.
- closeModal: You should pass a function that will handle the logic to close the modal, typically setting a state to false or similar.

```

```
