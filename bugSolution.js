```javascript
// Correctly handling promises to prevent errors
db.collection('yourCollection').doc('yourDocument').get()
  .then(doc => {
    if (doc.exists) {
      const data = doc.data();
      // Access properties here; data is guaranteed to be loaded
      console.log(data.property); // Access 'property' after checking existence
    } else {
      console.log('No such document!');
    }
  })
  .catch(error => {
    console.error('Error getting document:', error);
  });
```