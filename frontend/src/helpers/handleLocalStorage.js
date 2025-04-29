export const handleLocalStorage = (formState) => {
     const existingProjects = JSON.parse(localStorage.getItem('formState')) || [];
     let updatedProjects;

     if (Array.isArray(formState)) {
          updatedProjects = formState;
     } else {
          updatedProjects = [...existingProjects, formState];
     }

     localStorage.setItem('formState', JSON.stringify(updatedProjects));
}