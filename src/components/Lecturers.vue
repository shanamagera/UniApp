<template>
    <div id='lecturers'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card class="mx-auto">
                    <v-toolbar
                    color="teal"
                    theme="dark"
                    >
                    <v-toolbar-title class="text-h6">
                        Lecturers
                    </v-toolbar-title>
                    </v-toolbar>
                 <v-container>
                    <v-table>
                 <thead>
                     <tr>
                        <th class="text-left"> First Name </th>
                        <th class="text-left">Last Name</th>
                        <th class="text-left">Email</th>
                        <th class="text-left">Phone</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr
                     v-for="lecturer in Lecturers" :key="lecturer.id">
                     <td>{{ lecturer.firstname }}</td>
                     <td>{{ lecturer.lastname }}</td>
                     <td>{{ lecturer.email }}</td>
                     <td>{{ lecturer.phone }}</td>
                     </tr>
                    </tbody>
                    </v-table>
                 </v-container> 
                 <v-divider></v-divider> 
                </v-card>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>
<script>
export default {
   data(){
    return{
        Lecturers: [
            {firstname:'Mwai',
            lastname:'Kibaki',
            email:'mkibaki@gmail.com',
            phone: '25472882927'
            },
            {firstname:'Lucy',
            lastname:'Kibaki',
            email:'lkibaki@gmail.com',
            phone: '25472882927'
            },
            {firstname:'Uhuru',
            lastname:'Kenyatta',
            email:'ukenyatta@gmail.com',
            phone: '25472882927'
            },
            {firstname:'Daniel',
            lastname:'Moi',
            email:'dmoi@gmail.com',
            phone: '25472882927'
            },
        ]
    }
   }
}
</script>