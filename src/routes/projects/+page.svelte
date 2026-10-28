<script>
    const tableData = [
        { title: "Is SQL better than No SQL", date: "21 January 2027" },
        {
            title: "Is Rust worth learning for backend development",
            date: "3 January 2027",
        },
        {
            title: "REST vs GraphQL: which one should you pick",
            date: "7 January 2027",
        },
        {
            title: "Why does my Docker container keep restarting",
            date: "11 January 2027",
        },
        {
            title: "Is Kubernetes overkill for small teams",
            date: "14 January 2027",
        },
        {
            title: "Monorepo or polyrepo: a practical comparison",
            date: "18 January 2027",
        },
        {
            title: "Is TypeScript always better than JavaScript",
            date: "24 January 2027",
        },
        {
            title: "How does garbage collection actually work",
            date: "27 January 2027",
        },
        { title: "Is Python too slow for production", date: "30 January 2027" },
        {
            title: "Understanding the CAP theorem without the jargon",
            date: "2 February 2027",
        },
        {
            title: "Is Go better than Rust for CLI tools",
            date: "5 February 2027",
        },
        {
            title: "What is observability and why should you care",
            date: "9 February 2027",
        },
        {
            title: "Is microservices architecture still worth it",
            date: "12 February 2027",
        },
        {
            title: "Redis vs Memcached: when to use which",
            date: "16 February 2027",
        },
        { title: "Why do developers hate meetings", date: "19 February 2027" },
        { title: "Is Vim still relevant in 2027", date: "23 February 2027" },
        {
            title: "How do you choose between Postgres and MySQL",
            date: "26 February 2027",
        },
        { title: "Is serverless really cheaper", date: "2 March 2027" },
        { title: "What makes a good pull request", date: "6 March 2027" },
        {
            title: "Is infrastructure as code worth the effort",
            date: "9 March 2027",
        },
        { title: "Tabs or spaces: does it matter", date: "13 March 2027" },
        {
            title: "Is Linux better than Windows for development",
            date: "17 March 2027",
        },
        { title: "How does DNS resolution work", date: "20 March 2027" },
        { title: "Is test-driven development worth it", date: "24 March 2027" },
        {
            title: "SQL joins explained with simple examples",
            date: "28 March 2027",
        },
        { title: "Is open source really free", date: "31 March 2027" },
        { title: "Why is my build so slow", date: "4 April 2027" },
        { title: "Is Terraform better than Pulumi", date: "8 April 2027" },
        {
            title: "What is the difference between concurrency and parallelism",
            date: "11 April 2027",
        },
        { title: "Is Agile dead", date: "15 April 2027" },
        { title: "How do you debug a memory leak", date: "19 April 2027" },
        {
            title: "Is NoSQL good enough for financial data",
            date: "22 April 2027",
        },
        {
            title: "Is frontend development harder than backend",
            date: "26 April 2027",
        },
        {
            title: "What is a service mesh and do you need one",
            date: "30 April 2027",
        },
        { title: "Is Git rebase better than merge", date: "3 May 2027" },
        { title: "How do load balancers actually work", date: "7 May 2027" },
        {
            title: "Is learning algorithms still important",
            date: "10 May 2027",
        },
        { title: "Is Bash good enough for automation", date: "14 May 2027" },
        { title: "Why do deployments fail on Fridays", date: "18 May 2027" },
        {
            title: "Is cloud certification worth the money",
            date: "21 May 2027",
        },
        {
            title: "What is idempotency and why does it matter",
            date: "25 May 2027",
        },
        { title: "Is SQLite enough for production", date: "29 May 2027" },
        { title: "How do you design a rate limiter", date: "1 June 2027" },
        { title: "Is pair programming worth the cost", date: "5 June 2027" },
        { title: "What is the best way to learn SRE", date: "9 June 2027" },
        { title: "Is YAML a bad configuration language", date: "12 June 2027" },
        {
            title: "How do feature flags reduce deployment risk",
            date: "16 June 2027",
        },
        { title: "Is dark mode better for your eyes", date: "20 June 2027" },
        { title: "What is chaos engineering", date: "24 June 2027" },
        { title: "Is documentation worth writing", date: "28 June 2027" },
    ];
</script>

<div class="card bg-surface-100-900 p-4 table-wrap">
    <table class="table caption-bottom">
        <tbody class="[&>tr]:hover:preset-tonal-brand">
            {#each tableData as row (row.title)}
                <tr>
                    <td>{row.title}</td>
                    <td class="text-right">{row.date}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
