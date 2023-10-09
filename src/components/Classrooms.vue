<template>
    <div id='classrooms'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card class="mx-auto">
                    <v-toolbar
                    color="teal"
                    theme="dark"
                    >
                    <v-toolbar-title class="text-h6">
                        Classrooms
                    </v-toolbar-title>
                    </v-toolbar>
                 <v-container>
                    <v-table>
                 <thead>
                     <tr>
                        <th class="text-left"> Class Name </th>
                        <th class="text-left">Building</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr
                     v-for="student in classrooms" :key="classrooms.id">
                     <td>{{ student.classname }}</td>
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
        classrooms: [
            {classname:'Ericsson Lab',
            building:'Students Center'
            },
            {classname:'Safaricom',
            building:'Students Center'
            },
            {classname:'Lecture Hall',
            building:'STMP'
            },
            {classname:'Business Hall',
            building:'SBS'
            },
        ]
    }
   }
}
</script>