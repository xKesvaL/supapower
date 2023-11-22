<script>
    import { page } from '$app/stores';
    
    let username = $page.params.username;

</script>
<div class="justify-center w-full flex-col flex">
    <!-- HEADER -->
    <div class="flex items-center gap-16 my-4 mx-auto">
        <img class="rounded-full w-14 border-gray-700 border-2 h-14" alt="">
        <div class="text-2xl">
            <h2>{username}</h2> 
        </div>
    </div>
    <!-- FOLLOWERS -->
    <div class="flex gap-5 text-center justify-center mt-4 text-sm">
        <div>
            <span class="font-bold">0</span>
            <p>Workouts</p>
        </div>
        <div>
            <span class="font-bold">255</span>
            <p>Followers</p>
        </div>
        <div>
            <span class="font-bold">161</span>
            <p>Followings</p>
        </div>
    </div>
    <!-- DESCRIPTIONS -->
    <div class="mt-4 text-xs m-4 text-white flex flex-col gap-2">
        <p>19, Fullstack Developer Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi libero suscipit animi ad adipisci perferendis cupiditate modi eligendi at ullam!. 🚗🏍️🎧♟️🎮</p>
    </div>
    <!-- DASHBOARD -->
    <div class="flex flex-row mt-4 gap-2 flex-wrap">
        <div class="flex gap-5 shadow-indigo-500/50">
            <div>

            </div>
            <div>
                <p>Statistics</p>
            </div>
        </div>
        <div>
            <div>

            </div>
            <div>
                <p>Exercises</p>
            </div>
        </div>
        <div>
            <div>

            </div>
            <div>
                <p>Measures</p>
            </div>
        </div>
        <div>
            <div>

            </div>
            <div>
                <p>Calendar</p>
            </div>
        </div>
    </div>

</div>