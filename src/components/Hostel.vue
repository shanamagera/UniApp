<template>
    <div id='hostel'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card class="mx-auto">
                    <v-toolbar
                    color="teal"
                    theme="dark"
                    >
                    <v-toolbar-title class="text-h6">
                        Hostel
                    </v-toolbar-title>
                    </v-toolbar>
                 <v-container>
                    <v-table>
                 <thead>
                     <tr>
                        <th class="text-left"> Hostel Name </th>
                        <th class="text-left">Building</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr
                     v-for="student in hostel" :key="hostel.id">
                     <td>{{ student.hostelname }}</td>
                     <td>{{ student.building }}</td>
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
        hostel: [
            {hostelname:'Kifaru',
            building:'Qwetu'
            },
            {hostelname:'Chui',
            building:'Qwetu'
            },
            {hostelname:'Tulivu',
            building:'Mariana'
            },
        ]
    }
   }
}
</script>