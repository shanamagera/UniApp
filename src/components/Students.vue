<template>
    <div id='students'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card class="mx-auto">
                    <v-toolbar
                    color="teal"
                    theme="dark"
                    >
                    <v-toolbar-title class="text-h6">
                        Students
                    </v-toolbar-title>
                    </v-toolbar>
                 <v-container>
                    <v-table>
                 <thead>
                     <tr>
                        <th class="text-left"> First Name </th>
                        <th class="text-left">Last Name</th>
                        <th class="text-left">Gender</th>
                        <th class="text-left">Email</th>
                        <th class="text-left">Phone</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr
                     v-for="student in students" :key="student.id">
                     <td>{{ student.firstname }}</td>
                     <td>{{ student.lastname }}</td>
                     <td>{{ student.gender }}</td>
                     <td>{{ student.email }}</td>
                     <td>{{ student.phone }}</td>
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
        students: [
            {firstname:'John',
            lastname:'Richard',
            gender:' M',
            email:'jrichard@gmail.com',
            phone: '25472882927'
            },
            {firstname:'Johny',
            lastname:'Depp',
            gender:' M',
            email:'jdepp@gmail.com',
            phone: '25473834939'
            },
            {firstname:'Will',
            lastname:'Smith',
            gender:' M',
            email:'wsmith@gmail.com',
            phone: '25476388437'
            },
            {firstname:'Viola',
            lastname:'Davis',
            gender:'F',
            email:'vdavis@gmail.com',
            phone: '25478902451'
            },
        ]
    }
   }
}
</script>