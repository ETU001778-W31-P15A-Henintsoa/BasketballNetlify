import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importe le CSS de Bootstrap
import './Table.css';
const Statisitiques = () => {
  const data = [
    { id: 1, equipe: 'John Doe', nation: 25 },
    { id: 2, equipe: 'Jane Doe', nation: 30 },
    { id: 3, equipe: 'Bob Smith', nation: 22 },
  ];

  return (
<div class="card">
<div class="table-responsive text-nowrap">
    
<h1 class="card-header">Statistiques des joueurs</h1>
  <table class="table">
    <thead>
    <tr >
                    <th><strong>Classement</strong></th>
                  <th><strong>Joueur</strong></th>
                     <th><strong>Equipe</strong></th>
                     <th><strong>Nombre Match</strong></th>
                     <th><strong>Match joue</strong></th>
                     <th><strong>PPM</strong></th>
                     <th><strong>RPM</strong></th>
                     <th><strong>PDPM</strong></th>
                     <th><strong>MPM</strong></th>
                     <th><strong>EFF</strong></th>
                     <th><strong>FG%</strong></th>
                     <th><strong>3P%</strong></th>
                     <th><strong>%LF</strong></th>

                 </tr>
    </thead>
    <tbody class="table-border-bottom-0">
                     {data.map((item) => (
                     <tr class="table-danger" key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.equipe}</td>
                         <td>{item.nation}</td>
                         <td>98</td>
                         <td>100</td>
                         <td>100</td>
                         <td>100</td>
                         <td>100</td>
                         <td>100</td>
                         <td>100</td>
                         <td>100</td>
                         <td>100</td>
                         <td>100</td>
                     </tr>
                     ))}
                 </tbody>
  </table>
</div>
</div>
  );
};



export default Statisitiques;


